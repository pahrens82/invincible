import { useState } from "react";

import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

import {Gear, Mechanics, Powers, Talents, YourSuperhero} from "./components";

import "./App.css";

export const App = () => {
	const [count, setCount] = useState(0);

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
