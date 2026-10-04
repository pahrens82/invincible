import { 
    useEffect,
    useState,
} from "react";

import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

import {Gear, Mechanics, Powers, Talents, YourSuperhero} from "./components";

import "./App.css";

export const App = () => {
	useEffect(
        () => {
            //WATCH FOR THE CLICK OF THE BUTTON
            document
                .querySelector("body")
                .addEventListener("click", getBlood);

            // VARIABLE TO MAKE POSSIBLE NOT REPEATING THE BLOOD SPLASHES
            let splashesUsed = [];

            //FUNCTION TO CHOSE A RANDOM BLOOD SPLASH THAT HAVEN'T BEEN DISPLAYED BEFORE
            function getBlood() {
                if (splashesUsed.length == 3) {
                splashesUsed.shift();
                splashesUsed.shift();
                }

                let randomNumber = Math.floor(Math.random() * 3);

                while (splashesUsed.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * 3);
                }

                let chosenNumber = randomNumber;

                if (chosenNumber === 0) {
                Blood1();
                } else if (chosenNumber === 1) {
                Blood2();
                } else if (chosenNumber === 2) {
                Blood3();
                }

                splashesUsed.push(chosenNumber);
            }

            const getRandomPixels = () => {
                return Math.floor(Math.random() * 301) - 200;
            }

            //GETTING THE SPLASH OF BLOOD 1
            function Blood1() {
                document.querySelector(".blood-splash-1").style.left = `${getRandomPixels()}px`;
                document.getElementById("splash-1-fade").beginElement();
                document.getElementById("splash-1a-drip").beginElement();
                document.getElementById("splash-1b-drip").beginElement();
            }

            //GETTING THE SPLASH OF BLOOD 2
            function Blood2() {
                document.querySelector(".blood-splash-2").style.left = `${getRandomPixels()}px`;
                document.getElementById("splash-2-fade").beginElement();
                document.getElementById("splash-2-drip").beginElement();
            }

            //GETTING THE SPLASH OF BLOOD 3
            function Blood3() {
                document.querySelector(".blood-splash-3").style.left = `${getRandomPixels()}px`;
                document.getElementById("splash-3-fade").beginElement();
                document.getElementById("splash-3-drip").beginElement();
            }
        }, 
        []
    );

	return (
    	<Container>
			<Row>
				<Col>
					<Tabs className={"d-flex flex-column flex-md-row"} defaultActiveKey={"your-superhero"}>
						<Tab eventKey={"your-superhero"} title={"Character Creation"}>
              				<YourSuperhero />
	            		</Tab>
		    			<Tab eventKey={"powers"} title={"Powers"}>
        	      			<Powers />
            			</Tab>
	    				<Tab eventKey={"talents"} title={"Talents"}>
							<Talents/>
						</Tab>
						<Tab eventKey={"mechanics"} title={"Mechanics"}>
							<Mechanics/>
						</Tab>
						<Tab eventKey={"gear"} title={"Gear"}>
							<Gear/>
						</Tab>
    	      		</Tabs>
        		</Col>
			</Row>
		</Container>
	);
};
