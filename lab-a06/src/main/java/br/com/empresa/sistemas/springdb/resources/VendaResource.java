package br.com.empresa.sistemas.springdb.resources;

import java.io.InputStream;
import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.NoSuchElementException;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.empresa.sistemas.springdb.model.Venda;
import br.com.empresa.sistemas.springdb.repository.VendaRepository;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@RestController
@RequestMapping("vendas")
public class VendaResource {

   @Autowired
   private VendaRepository vendaRepository;

   @GetMapping
   public List<Venda> findAll() {
      return vendaRepository.findAll();
   }

   @PostMapping
   public ResponseEntity<Venda> salvar(@Valid @RequestBody Venda venda) {

      Venda vendaSalvo = vendaRepository.save(venda);

      URI location = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
            .buildAndExpand(vendaSalvo.getId()).toUri();

      return ResponseEntity.created(location).body(vendaSalvo);
   }

   @PutMapping("/{id}")
   public ResponseEntity<Venda> atualizar(@PathVariable Integer id, @Valid @RequestBody Venda venda) {

      try {

         Venda vendaSalvo = vendaRepository.findById(id).get();

         BeanUtils.copyProperties(venda, vendaSalvo, "id");
         vendaRepository.save(vendaSalvo);

         return ResponseEntity.ok(vendaSalvo);

      } catch (NoSuchElementException e) {
         return ResponseEntity.notFound().build();
      }
   }

   @GetMapping("/{id}")
   public ResponseEntity<Venda> findByCodigo(@PathVariable Integer id) {
      try {
         Venda venda = vendaRepository.findById(id).get();
         return ResponseEntity.ok(venda);
      } catch (NoSuchElementException e) {
         return ResponseEntity.notFound().build();
      }
   }

   @DeleteMapping("/{id}")
   @ResponseStatus(HttpStatus.NO_CONTENT)
   public void remove(@PathVariable Integer id) {
      vendaRepository.deleteById(id);
   }

   @GetMapping("/relatorio")
   public ResponseEntity<byte[]> relatorio() {
      Map<String, Object> parametros = new HashMap<>();
      parametros.put("REPORT_LOCALE", new Locale("pt", "BR"));

      byte[] reportBytes = null;

      // Produção do PDF
      try{
         InputStream io = this.getClass().getResourceAsStream("/reports/vendas_report.jasper");

         // Buscar dados         
         JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource( vendaRepository.findAll() );

         JasperPrint jasperPrint = JasperFillManager.fillReport(io, parametros, ds);

         reportBytes = JasperExportManager.exportReportToPdf(jasperPrint);

      } catch (JRException ex) {
         System.out.println("->" + ex.getMessage() );
         return ResponseEntity.noContent().build();
      }

      return ResponseEntity.ok()
               .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_PDF_VALUE)
               .body(reportBytes);
   }


}