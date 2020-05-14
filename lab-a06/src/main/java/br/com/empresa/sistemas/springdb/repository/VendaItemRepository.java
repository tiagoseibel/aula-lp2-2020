package br.com.empresa.sistemas.springdb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.empresa.sistemas.springdb.model.VendaItem;

@Repository
public interface VendaItemRepository extends JpaRepository<VendaItem, Integer>{

}