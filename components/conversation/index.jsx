import React, { useEffect, useRef } from "react";
import { ConversationalForm } from "conversational-form";
import questions from "./quetions";

export default function MyForm({ user }) {
	let cf = null;
	const ref = useRef(null);

	const qa = [
		{
			tag: "cf-robot-message",
			"cf-questions": user?.displayName,
		},
		...questions,
	];

	useEffect(function mount() {
		cf = ConversationalForm.startTheConversation({
			options: {
				theme: "black",
				showProgressBar: true,
				submitCallback: submitCallback,
				preventAutoAppend: true,
				preventAutoFocus: false,
				hideUserInputOnNoneStandardInput: false,
				userImage: user?.photoURL,
				//preventAutoFocus: true,
				//loadExternalStyleSheet: false,
				robotImage: "/images/logo.svg",
			},
			tags: qa,
		});

		ref.current.appendChild(cf.el);

		//cf.addUserChatResponse("Hello from user.");

		return function unMount() {
			cf.remove();
		};
	}, []);

	function submitCallback() {
		var formDataSerialized = cf.getFormData(true);
		console.log("Formdata, obj:", formDataSerialized);
		cf.addRobotChatResponse("Done");
	}

	return (
		<>
			<div ref={ref} />
		</>
	);
}

//<input id="password" type="password" class="aws-signin-textfield" autocorrect="off" autocapitalize="off">

// <div id="password_input_alert" class="signin-input-warning" style="display:none">
//                             <span id="password_input_alert_content" class="awsui-text-small aws-signin-color-red"></span>
//                         </div>
