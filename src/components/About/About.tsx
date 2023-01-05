import { Box, Stack } from "@mui/system";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div>
      <Stack className={styles.container}>
        <Box>
          <h1 className="py-3 text-center">About Us</h1>
          <p>
          Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more.
          </p>
          <p>
          Takes inspiration from libraries like Immer and Autodux to let you write "mutative" immutable update logic, and even create entire "slices" of state automatically.
          </p>
        </Box>
      </Stack>
    </div>
  );
};

export default About;
