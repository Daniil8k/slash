import { useState } from "react";
import "@/styles/main.scss";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "@/router";
import Menu from "@/components/app/Menu";
import Footer from "@/components/app/Footer";
import Header from "@/components/app/Header";
import Panel from "@/components/app/Panel";

function App() {
	return (
		<BrowserRouter>
			<div
				className="grid grid-cols-12 gap-2 h-[100vh] max-w-7xl mx-auto p-1"
				style={{ gridTemplateRows: "40px 1fr 20px" }}
			>
				<Header className="col-span-12 row-span-1" />
				<Menu className="col-span-3" />
				<div className="flex justify-center col-span-6 min-h-0">
					<Router />
				</div>
				<Panel className="col-span-3"/>
				<Footer className="col-span-12" />
			</div>
		</BrowserRouter>
	);
}

export default App;
