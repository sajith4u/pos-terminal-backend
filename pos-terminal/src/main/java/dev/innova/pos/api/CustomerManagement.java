package dev.innova.pos.api;

import com.wordnik.swagger.annotations.*;
import dev.innova.pos.beans.Customer;
import org.apache.cxf.rs.security.cors.CrossOriginResourceSharing;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Path("/")
@ApiModel(value = "Customer Management")
@Api(value = "POS Management Server", description = "Customer Management")
@CrossOriginResourceSharing(allowAllOrigins = true, allowCredentials = true)
public interface CustomerManagement {
    @POST
    @Path("/customer/add")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Add Student", response = Response.class, notes = "Add Customer")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "Add Customer Successful"),
            @ApiResponse(code = 404, message = "Failed to Add Customer"),
            @ApiResponse(code = 500, message = "Failed to connect to Server")})
    Response addCustomer(Customer customer);
}
