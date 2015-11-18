package dev.innova.pos.service;


import dev.innova.pos.beans.Customer;
import dev.innova.pos.error.DataAccessException;

public interface CustomerDbManagement {
    long addCustomer(Customer customer) throws DataAccessException;
}
