package dev.innova.pos.boot;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.tanukisoftware.wrapper.WrapperListener;
import org.tanukisoftware.wrapper.WrapperManager;

public class BootLoader implements WrapperListener {
    private static final Logger logger = LoggerFactory.getLogger(BootLoader.class);

    private AbstractApplicationContext applicationContext;

    public static void main(String[] args) {
        WrapperManager.start(new BootLoader(), args);
    }

    @Override
    public Integer start(String[] strings) {
        applicationContext = new ClassPathXmlApplicationContext(new String[]{"classpath:pos-server-spring-context.xml"});
        logger.info("========================================================");
        logger.info("=============  Starting POS-server ==================");
        logger.info("========================================================");
        applicationContext.start();
        logger.info("========================================================");
        logger.info("=============  POS-server Started  ==================");
        logger.info("========================================================");
        return null;
    }

    @Override
    public int stop(int i) {
        logger.info("======================================================");
        logger.info("=============  POS-server Stopping ==================");
        logger.info("======================================================");
        if (applicationContext != null && applicationContext.isRunning()) {
            applicationContext.stop();
        }
        logger.info("=========================================");
        logger.info("========== POS-server Stopped ==========");
        logger.info("=========================================");
        return 0;
    }

    @Override
    public void controlEvent(int i) {

    }
}
