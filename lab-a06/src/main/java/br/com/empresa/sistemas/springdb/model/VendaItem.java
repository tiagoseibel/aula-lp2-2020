package br.com.empresa.sistemas.springdb.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class VendaItem {
   @Id
   private int id;
   @ManyToOne
   private Venda venda;
   private String item;
   private double quantidade;
   private double valor;

   public int getId() {
      return id;
   }

   public void setId(int id) {
      this.id = id;
   }

   public Venda getVenda() {
      return venda;
   }

   public void setVenda(Venda venda) {
      this.venda = venda;
   }

   public String getItem() {
      return item;
   }

   public void setItem(String item) {
      this.item = item;
   }

   public double getQuantidade() {
      return quantidade;
   }

   public void setQuantidade(double quantidade) {
      this.quantidade = quantidade;
   }

   public double getValor() {
      return valor;
   }

   public void setValor(double valor) {
      this.valor = valor;
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
      VendaItem other = (VendaItem) obj;
      if (id != other.id)
         return false;
      return true;
   }

   
}