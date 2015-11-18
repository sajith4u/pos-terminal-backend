package dev.innova.pos.api.impl;

import dev.innova.pos.api.CustomerManagement;
import dev.innova.pos.beans.Customer;

import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.Map;


public class CustomerManagementImpl implements CustomerManagement {
    private Map<Integer, Object> customers = new HashMap<>();

    @Override
    public Response addCustomer(Customer customer) {
        Map<String, Object> response = new HashMap<>();
        customers.put(customer.getId(), customer);
        response.put("STATUS", "S1000");
        return Response.status(Response.Status.OK).entity(response).build();
    }
}
