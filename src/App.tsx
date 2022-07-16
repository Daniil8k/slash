import { useEffect, useState } from "react";
import "@/styles/main.scss";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "@/router";
import Menu from "@/components/app/Menu";
import Footer from "@/components/app/Footer";
import Header from "@/components/app/Header";
import Panel from "@/components/app/Panel";

function App() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<BrowserRouter>
			<div
				className="relative grid grid-cols-12 gap-2 h-[100vh] max-w-7xl mx-auto p-1"
				style={{ gridTemplateRows: "40px 1fr 20px" }}
			>
				<Header className="col-span-12 row-span-1" onMenuClick={() => setShowMobileMenu(true)} />
				<Menu
					className={[
						!showMobileMenu && "hidden",
						"col-span-3 absolute top-0 z-10 h-full md:static md:flex",
					].join(" ")}
					onClose={() => setShowMobileMenu(false)}
				/>
				<div className="flex justify-center min-h-0 col-span-12 md:col-span-6">
					<Router />
				</div>
				<Panel className="col-span-3 hidden md:block" />
				<Footer className="col-span-12" />
				{showMobileMenu && <div className="backdrop md:hidden" onClick={() => setShowMobileMenu(false)}></div>}
			</div>
		</BrowserRouter>
	);
}

export default App;
