import { useEffect, useState } from "react";
import "@/styles/main.scss";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "@/router";
import Menu from "@/components/app/Menu";
import Footer from "@/components/app/Footer";
import Header from "@/components/app/Header";
import Panel from "@/components/app/Panel";

const MOBILE_BREAKPOINT = 768;

function App() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [isMobile, setIsMobile] = useState(
		window.innerWidth < MOBILE_BREAKPOINT
	);

	const onResize = (e: any) => {
		let width = e.target.innerWidth;
		setIsMobile(width < MOBILE_BREAKPOINT);
	};

	useEffect(() => {
		window.addEventListener("resize", onResize, true);

		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return (
		<BrowserRouter>
			<div
				className="relative grid grid-cols-12 gap-2 h-[100vh] max-w-7xl mx-auto p-1"
				style={{ gridTemplateRows: "3rem 1fr 1.5rem" }}
			>
				<Header
					className="col-span-12 row-span-1"
					onMenuClick={() => setShowMobileMenu(true)}
				/>
				<Menu
					className={[
						isMobile && !showMobileMenu && "hidden",
						"col-span-3 absolute top-0 z-10 h-full md:static md:flex",
					].join(" ")}
					onClose={() => setShowMobileMenu(false)}
				/>
				<div className="flex justify-center min-h-0 col-span-12 md:col-span-5 lg:col-span-6">
					<Router />
				</div>
				{!isMobile && <Panel className="col-span-4 lg:col-span-3" />}
				<Footer className="col-span-12" />
				{isMobile && showMobileMenu && (
					<div
						className="backdrop"
						onClick={() => setShowMobileMenu(false)}
					></div>
				)}
			</div>
		</BrowserRouter>
	);
}

export default App;
