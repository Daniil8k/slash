import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "@/views/News";
import Friends from "@/views/Friends";
import Messages from "@/views/Messages";
import Events from "@/views/Events";
import Settings from "@/views/Settings";

interface RouterProps {
	onClick?: () => void;
}

const Router: FC<RouterProps> = ({}) => {
	return (
		<Routes>
			<Route path="/" element={<News />} />
			<Route path="/friends" element={<Friends />} />
			<Route path="/messages" element={<Messages />} />
			<Route path="/events" element={<Events />} />
			<Route path="/settings" element={<Settings />} />
		</Routes>
	);
};

export default Router;
