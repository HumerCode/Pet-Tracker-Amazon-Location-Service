// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useEffect, useState, useRef } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { MapView, Button } from "@aws-amplify/ui-react";
import { Marker } from "react-map-gl";
import GeofencesLayer from "./components/geofences/GeofencesLayer";

const App = () => {
  const [openedPanel, setOpenedPanel] = useState();
  const [openedInfoBox, setOpenedInfoBox] = useState();
  const [locations, setLocations] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const subscriptionRef = useRef();
  subscriptionRef.current = API.graphql(
    graphqlOperation(`
    subscription OnUpdatePosition {
      onUpdatePosition {
        id
        lng
        lat
        updatedAt
      }
    }
  `)
  );

  const handleSubscriptionToggle = () => {
    if (subscriptionRef.current) {
      if (isSubscribed) {
        subscriptionRef.current.unsubscribe();
        setIsSubscribed(false);
      } else {
        subscriptionRef.current.subscribe({
          next: ({ value }) => {
            console.log({ value });
            setLocations([value.data.onUpdatePosition]);
          },
          error: (err) => console.error(err),
        });
      }
    }
  };

  // Update state of the currently opened panel
  const handlePanelChange = (panel) => {
    setOpenedPanel(panel);
  };

  return (
    <>
      <MapView
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14,
        }}
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0.59rem",
            left: "40.6rem",
          }}
        >
          <Button
            onClick={handleSubscriptionToggle}
            backgroundColor="white"
            size="small"
            gap="0.5rem"
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 2px" }}
          >
            <div style={{ display: "flex", width: "24px" }}>
              <svg
                viewBox="0 0 48 48"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M42,24 C40.897,24 40,23.103 40,22 C40,20.897 40.897,20 42,20 C43.103,20 44,20.897 44,22 C44,23.103 43.103,24 42,24 M30,37 C28.897,37 28,36.103 28,35 C28,33.897 28.897,33 30,33 C31.103,33 32,33.897 32,35 C32,36.103 31.103,37 30,37 M20,27 C20,25.897 20.897,25 22,25 C23.103,25 24,25.897 24,27 C24,28.103 23.103,29 22,29 C20.897,29 20,28.103 20,27 M6,44 C4.897,44 4,43.103 4,42 C4,40.897 4.897,40 6,40 C7.103,40 8,40.897 8,42 C8,43.103 7.103,44 6,44 M23,6 C23,4.897 23.897,4 25,4 C26.103,4 27,4.897 27,6 C27,7.103 26.103,8 25,8 C23.897,8 23,7.103 23,6 M6,8 C4.897,8 4,7.103 4,6 C4,4.897 4.897,4 6,4 C7.103,4 8,4.897 8,6 C8,7.103 7.103,8 6,8 M42,18 C40.998,18 40.093,18.383 39.391,18.993 L28.34,8.19 C28.755,7.561 29,6.809 29,6 C29,3.794 27.206,2 25,2 C23.142,2 21.589,3.28 21.142,5 L9.858,5 C9.411,3.28 7.858,2 6,2 C3.794,2 2,3.794 2,6 C2,8.206 3.794,10 6,10 C7.858,10 9.411,8.72 9.858,7 L21.142,7 C21.589,8.72 23.142,10 25,10 C25.67,10 26.291,9.819 26.847,9.527 L38.245,20.669 C38.096,21.088 38,21.531 38,22 C38,22.792 38.238,23.526 38.637,24.147 L31.845,31.472 C31.29,31.181 30.669,31 30,31 C29.15,31 28.366,31.27 27.718,31.723 L25.092,29.506 C25.651,28.818 26,27.953 26,27 C26,24.794 24.206,23 22,23 C19.794,23 18,24.794 18,27 C18,27.661 18.177,28.275 18.461,28.825 L8.05,38.583 C7.448,38.221 6.752,38 6,38 C3.794,38 2,39.794 2,42 C2,44.206 3.794,46 6,46 C8.206,46 10,44.206 10,42 C10,41.273 9.79,40.6 9.45,40.011 L19.783,30.326 C20.419,30.75 21.181,31 22,31 C22.507,31 22.986,30.896 23.433,30.723 L26.422,33.247 C26.16,33.779 26,34.369 26,35 C26,37.206 27.794,39 30,39 C32.206,39 34,37.206 34,35 C34,34.189 33.754,33.436 33.337,32.804 L40.108,25.502 C40.674,25.81 41.313,26 42,26 C44.206,26 46,24.206 46,22 C46,19.794 44.206,18 42,18"></path>
              </svg>
            </div>
            Trackers
          </Button>
        </div>
        <GeofencesLayer
          isOpenedPanel={openedPanel === "GEOFENCES_PANEL" ? true : false}
          onPanelChange={handlePanelChange}
          isDrawing={openedInfoBox === "GEOFENCE_DRAWING_MODE" ? true : false}
          onDrawingChange={(status) =>
            status
              ? setOpenedInfoBox("GEOFENCE_DRAWING_MODE")
              : setOpenedInfoBox()
          }
        />
        {locations.map((location) => (
          <Marker
            key={`${location.lat}-${location.lng}`}
            latitude={location.lat}
            longitude={location.lng}
          />
        ))}
      </MapView>
    </>
  );
};

export default App;
