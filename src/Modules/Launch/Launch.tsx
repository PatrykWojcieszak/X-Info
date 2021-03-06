import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//COMPONENTS
import { Gallery, SEO, LaunchExtendedInfo } from "../Shared";
import { LaunchSkeleton } from "../Shared/Skeletons/LaunchSkeleton";
import { MediaSection } from "./MediaSection/MediaSection";
import { CrewList } from "./CrewList/CrewList";
import { ShipList } from "./ShipList/ShipList";
import { CoreList } from "./CoreList/CoreList";
import { PayloadList } from "./PayloadList/PayloadList";
import { YouTube } from "./YouTube/YouTube";

//STYLE
import fhheavy from "../../resources/images/falconHeavy.png";
import falcon1 from "../../resources/images/f1.png";
import starship from "../../resources/images/st.png";
import falcon9 from "../../resources/images/falcon9.png";
import { pageVariantsAnim } from "../../Animations/Animations_motion";

//REDUX
import { fetchLaunch } from "../../Store/Launch/launchSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/rootReducer";

//OTHER
import { launchPageTitle, launchPageDescription } from "../Shared/SEO/Tags";
import { RocketType } from "../../Types";
import styled from "styled-components/macro";
import { device } from "../../resources/styles/helpers/breakpoints";
import {
  flexCenter,
  flexColumnCenter,
} from "../../resources/styles/helpers/mixins";

const Launch = () => {
  const { id } = useParams();

  const launch = useSelector((state: RootState) => state.launch);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLaunch(id));
  }, [dispatch, id]);

  //ROCKET IMAGE
  let rocketImg = <></>;

  if (launch.launch.docs[0]?.rocket.id === RocketType.f1)
    rocketImg = <img src={falcon1} alt="Falcon 1" />;
  else if (launch.launch.docs[0]?.rocket.id === RocketType.f9)
    rocketImg = <img src={falcon9} alt="Falcon 9" />;
  else if (launch.launch.docs[0]?.rocket.id === RocketType.fh)
    rocketImg = <img src={fhheavy} alt="Falcon Heavy" />;
  else if (launch.launch.docs[0]?.rocket.id === RocketType.starship)
    rocketImg = <img src={starship} alt="Starship" />;

  let launchInformation = (
    <StyledLaunch>
      <LaunchSkeleton />
    </StyledLaunch>
  );

  if (!launch.loading) {
    launchInformation = (
      <>
        <StyledLaunch>
          <LaunchExtendedInfo
            showMoreDetailsButton={false}
            launch={launch.launch.docs[0]}
          />
          <StyledRow>
            <Link to={`/vehicles/${launch.launch.docs[0]?.rocket.id}`}>
              <StyledRocket>
                <h3>{launch.launch.docs[0]?.rocket.name}</h3>
                {rocketImg}
              </StyledRocket>
            </Link>
            <StyledInfoContainer>
              <PayloadList payloadList={launch.launch.docs[0].payloads} />
              <CoreList coreList={launch.launch.docs[0].cores} />
            </StyledInfoContainer>
          </StyledRow>
          <CrewList crewList={launch.launch.docs[0].crew} />
          <ShipList shipList={launch.launch.docs[0].ships} />
          <YouTube youtubeId={launch.launch.docs[0].links.youtube_id} />
        </StyledLaunch>
        <div style={{ padding: "0 1rem" }}>
          {launch.launch.docs[0]?.links.flickr.original.length > 0 ? (
            <Gallery images={launch.launch.docs[0].links.flickr.original} />
          ) : null}
          <MediaSection links={launch.launch.docs[0]?.links} />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${launchPageTitle} - ${launch.launch.docs[0]?.flight_number}`}
        description={launchPageDescription}
      />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}>
        {launchInformation}
      </motion.div>
    </>
  );
};

export default Launch;

const StyledLaunch = styled.div`
  margin-top: 8rem;
  padding: 0 1rem;

  @media ${device.large} {
    padding: 0 4rem;
  }

  @media ${device.desktop} {
    padding: 0 20%;
  }
`;

const StyledRow = styled(flexCenter)`
  margin-top: 4rem;
  align-items: flex-start;
`;

const StyledRocket = styled(flexColumnCenter)`
  cursor: pointer;
  padding: 0 0.6rem 0.6rem 0.6rem;
  transition: all 0.4s ease-in-out;
  border: 1px solid transparent;
  border-radius: 0.8rem;
  max-width: 163px;
  min-width: 163px;
  text-align: center;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors?.fontSecondary};
  }

  h3 {
    font-weight: 100;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors?.fontPrimary};
    margin-bottom: 1rem;
  }

  img {
    height: 400px;
  }

  @media ${device.tablet} {
    img {
      height: 800px;
    }
  }
`;

const StyledInfoContainer = styled(flexColumnCenter)`
  width: 100%;
  margin-left: 0;

  @media ${device.tablet} {
    margin-left: 4rem;
  }
`;
