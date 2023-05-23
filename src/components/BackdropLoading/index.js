import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { HammerPNG } from "../../assets/AssetUtil";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function BackdropLoading() {
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open="true">
        <motion.div
          animate={{
            rotate: 360,
            transition: { duration: 1.5, repeat: Infinity },
          }}
        >
          <img src={HammerPNG} width={150} height={150} />
        </motion.div>
      </Backdrop>
    </div>
  );
}
