package br.com.empresa.sistemas.springdb.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Venda {
   @Id
   private int id;
   @ManyToOne
   private Cliente cliente;
   private double valorTotal;
   private LocalDate dataVenda;

   public int getId() {
      return id;
   }

   public void setId(int id) {
      this.id = id;
   }

   public Cliente getCliente() {
      return cliente;
   }

   public void setCliente(Cliente cliente) {
      this.cliente = cliente;
   }

   public double getValorTotal() {
      return valorTotal;
   }

   public void setValorTotal(double valorTotal) {
      this.valorTotal = valorTotal;
   }

   public LocalDate getDataVenda() {
      return dataVenda;
   }

   public void setDataVenda(LocalDate dataVenda) {
      this.dataVenda = dataVenda;
   }

   @Override
   public int hashCode() {
      final int prime = 31;
      int result = 1;
      result = prime * result + id;
      return result;
   }

   @Override
   public boolean equals(Object obj) {
      if (this == obj)
         return true;
      if (obj == null)
         return false;
      if (getClass() != obj.getClass())
         return false;
      Venda other = (Venda) obj;
      if (id != other.id)
         return false;
      return true;
   }

   
}