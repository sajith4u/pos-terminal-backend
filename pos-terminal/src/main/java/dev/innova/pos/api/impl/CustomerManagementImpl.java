package dev.innova.pos.api.impl;

import dev.innova.pos.api.CustomerManagement;
import dev.innova.pos.beans.Customer;
import dev.innova.pos.error.DataAccessException;
import dev.innova.pos.service.customer.CustomerDbManagementImpl;

import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.Map;


public class CustomerManagementImpl implements CustomerManagement {
    private Map<Integer, Object> customers = new HashMap<>();
    private CustomerDbManagementImpl customerDbManagement;

    @Override
    public Response addCustomer(Customer customer) {
        Map<String, Object> response = new HashMap<>();
        customers.put(customer.getId(), customer);
        try {
            customerDbManagement.addCustomer(customer);
            response.put("STATUS", "S1000");
        } catch (DataAccessException e) {
            response.put("STATUS", "E1300");
            response.put("DESCRIPTION", e.getMessage());
        }
        return Response.status(Response.Status.OK).entity(response).build();
    }

    @Override
    public Response getCustomer(String customerName) {
        Map<String, Object> response = new HashMap<>();
        response.put("STATUS", "S1000");
        return Response.status(Response.Status.OK).entity(response).build();
    }

    @Override
    public Response updateCustomer(Customer customer) {
        Map<String, Object> response = new HashMap<>();
        response.put("STATUS", "S1000");
        return Response.status(Response.Status.OK).entity(response).build();
    }

    @Override
    public Response deleteCustomer(int id) {
        Map<String, Object> response = new HashMap<>();
        response.put("STATUS", "S1000");
        return Response.status(Response.Status.OK).entity(response).build();
    }

    public void setCustomerDbManagement(CustomerDbManagementImpl customerDbManagement) {
        this.customerDbManagement = customerDbManagement;
    }
}
