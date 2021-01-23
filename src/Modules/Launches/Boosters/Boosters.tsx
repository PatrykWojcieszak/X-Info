import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import BoosterLaunchesInfo from "../../Shared/BoosterLaunchesInfo/BoosterLaunchesInfo";
import Button from "../../Shared/Button/Button";
import Spinner from "../../Shared/Spinner/Spinner";
import BoostersSkeleton from "../../Shared/Skeletons/BoostersSkeleton";

//STYLES
import styles from "./Boosters.module.scss";
import { showLaunchesList } from "../../../Animations/Animations_motion";
import { motion } from "framer-motion";

//REDUX
import { fetchBoosters } from "../../../Store/Boosters/actions";
import { connect } from "react-redux";

const Boosters = (props) => {
  const { t } = useTranslation();
  const { onFetchBoosters } = props;

  useEffect(() => {
    onFetchBoosters(1);
  }, [onFetchBoosters]);

  const FetchBoosters = () => {
    onFetchBoosters(props.boosters.nextPage);
  };

  let boostersArr = (
    <motion.div
      variants={showLaunchesList}
      initial="initial"
      animate="in"
      exit="out"
      className={styles.LaunchesWrapper}>
      {[1, 2, 3, 4, 5].map((n) => (
        <BoostersSkeleton key={n} />
      ))}
    </motion.div>
  );

  if (props.boosters.docs.length > 0) {
    boostersArr = (
      <motion.div
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        className={styles.LaunchesWrapper}>
        {props.boosters.docs.map((booster, index) => (
          <BoosterLaunchesInfo
            key={index}
            block={booster.block}
            serial={booster.serial}
            status={booster.status}
            reuse_count={booster.reuse_count}
            launches={booster.launches}
          />
        ))}
        {props.boosters.nextPage && (
          <div
            style={{
              marginTop: "2rem",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}>
            {props.loadingBoosters && <Spinner />}
            <Button
              disabled={props.loadingBoosters}
              name="LOAD MORE"
              styleType="primary"
              clicked={FetchBoosters}
            />
          </div>
        )}
      </motion.div>
    );
  }

  return <>{boostersArr}</>;
};

const mapStateToProps = (state) => {
  return {
    boosters: state.boosters.boosters,
    loadingBoosters: state.boosters.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBoosters: (page: number) => dispatch(fetchBoosters(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Boosters);
