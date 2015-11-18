package dev.innova.pos.service.customer;

import dev.innova.pos.beans.Customer;
import dev.innova.pos.error.DataAccessException;
import dev.innova.pos.service.CustomerDbManagement;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class CustomerDbManagementImpl extends JdbcDaoSupport implements CustomerDbManagement {
    private static final String CREATE_CUSTOMER = "INSERT INTO customer (id,customer_name," +
            "customer_last_name,customer_email,customer_mobile_no,customer_bank_no,gender) VALUES(?,?,?,?,?,?,?)";

    @Override
    public long addCustomer(final Customer customer) throws DataAccessException {
        System.out.println("Prepering to add Customer");
        try {

            getJdbcTemplate().update(new PreparedStatementCreator() {
                @Override
                public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                    PreparedStatement ps = connection.prepareStatement(CREATE_CUSTOMER);
                    ps.setLong(1, customer.getId());
                    ps.setString(2, customer.getName());
                    ps.setString(3, customer.getLastName());
                    ps.setString(4, customer.getEmail());
                    ps.setString(5, customer.getPhoneNumber());
                    ps.setString(6, customer.getBankNumber());
                    boolean genderType = customer.getGender().equals("MALE") ? true : false;
                    ps.setBoolean(7, genderType);
                    return ps;
                }
            });
            logger.info("Add Customer with ID {}");
            System.out.println("Add Success");
            return 0;
        } catch (Exception ex) {
            throw new DataAccessException("Error Occurred while CREATE Customer", ex);
        }
    }
}
