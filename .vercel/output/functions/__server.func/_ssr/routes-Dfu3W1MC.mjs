import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as MapPin, r as CalendarPlus } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dfu3W1MC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var INVITE = {
	kicker: "please join us for a",
	title: "Griha Pravesh",
	subtitle: "& House Blessing Ceremony",
	verse: "As we invite prosperity and divine blessing into our new home.",
	weekday: "Friday",
	month: "May",
	day: "25",
	year: "2026",
	muhurat: "10:45 AM",
	address1: "1234 Lotus Grove Lane",
	address2: "Frisco, TX 75035",
	family: "The Patel Family",
	mapsQuery: "1234 Lotus Grove Lane, Frisco, TX 75035"
};
var STORAGE_KEY = "griha-pravesh-patel-reply";
function mapsUrl() {
	return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(INVITE.mapsQuery)}`;
}
function calendarUrl() {
	return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Griha Pravesh — The Patel Family")}&dates=20260525T154500Z/20260525T174500Z&details=${encodeURIComponent("House blessing ceremony. Muhurat 10:45 AM. As we invite prosperity and divine blessing into our new home.")}&location=${encodeURIComponent(INVITE.mapsQuery)}`;
}
function downloadIcs() {
	const ics = [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//Patel Family//Griha Pravesh//EN",
		"CALSCALE:GREGORIAN",
		"METHOD:PUBLISH",
		"BEGIN:VEVENT",
		"UID:griha-pravesh-patel-20260525@invitation",
		"DTSTAMP:20260525T154500Z",
		"DTSTART:20260525T154500Z",
		"DTEND:20260525T174500Z",
		"SUMMARY:Griha Pravesh — The Patel Family",
		"DESCRIPTION:House blessing ceremony. Muhurat 10:45 AM.",
		"LOCATION:1234 Lotus Grove Lane\\, Frisco\\, TX 75035",
		"END:VEVENT",
		"END:VCALENDAR"
	].join("\r\n");
	const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "griha-pravesh-patel-family.ics";
	a.click();
	URL.revokeObjectURL(url);
}
function loadReply() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (!parsed || typeof parsed.name !== "string") return null;
		return parsed;
	} catch {
		return null;
	}
}
function saveReply(reply) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(reply));
}
function Gathering() {
	const [coming, setComing] = (0, import_react.useState)("yes");
	const [name, setName] = (0, import_react.useState)("");
	const [guests, setGuests] = (0, import_react.useState)(1);
	const [note, setNote] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [saved, setSaved] = (0, import_react.useState)(null);
	const [editing, setEditing] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const existing = loadReply();
		if (!existing) return;
		setSaved(existing);
		setName(existing.name);
		setGuests(existing.guests);
		setComing(existing.coming);
		setNote(existing.note);
	}, []);
	function onSubmit(e) {
		e.preventDefault();
		const trimmed = name.trim();
		if (!trimmed) {
			setError("Please share your name.");
			return;
		}
		const reply = {
			name: trimmed,
			guests: coming === "yes" ? guests : 0,
			coming,
			note: note.trim(),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		saveReply(reply);
		setSaved(reply);
		setEditing(false);
		setError("");
	}
	const showForm = !saved || editing;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "gathering",
		"aria-labelledby": "gathering-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "The ceremony"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "script-h",
				id: "gathering-title",
				children: "At the threshold"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "facts",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fact",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
							INVITE.weekday,
							", ",
							INVITE.month,
							" ",
							INVITE.day
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: INVITE.year })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fact",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: INVITE.muhurat }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Muhurat" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fact",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: INVITE.address1 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: INVITE.address2 })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "actions",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "btn",
						href: mapsUrl(),
						target: "_blank",
						rel: "noreferrer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { "aria-hidden": "true" }), "Directions"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "btn",
						href: calendarUrl(),
						target: "_blank",
						rel: "noreferrer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { "aria-hidden": "true" }), "Google Calendar"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "btn",
						type: "button",
						onClick: downloadIcs,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { "aria-hidden": "true" }), "Save .ics"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rsvp",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "kalash",
						src: "/art/kalash.jpg",
						alt: ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "A note for the family"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "script-h",
						children: "Your blessing"
					}),
					showForm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "lead",
								children: [
									"Kindly tell ",
									INVITE.family,
									" whether you will stand with them as they cross the threshold."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "choice",
								role: "group",
								"aria-label": "Will you attend",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": coming === "yes",
									onClick: () => setComing("yes"),
									children: "We will be there"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": coming === "afar",
									onClick: () => setComing("afar"),
									children: "Blessings from afar"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Your name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: name,
									onChange: (e) => setName(e.target.value),
									autoComplete: "name",
									maxLength: 80
								})]
							}),
							coming === "yes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "stepper",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "stepper-label",
									children: "Guests including you"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "stepper-controls",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": "Fewer guests",
											onClick: () => setGuests((n) => Math.max(1, n - 1)),
											children: "−"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: guests }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": "More guests",
											onClick: () => setGuests((n) => Math.min(12, n + 1)),
											children: "+"
										})
									]
								})]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "A blessing, if you wish" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: note,
									onChange: (e) => setNote(e.target.value),
									maxLength: 400
								})]
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "form-error",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "btn btn-solid",
								type: "submit",
								children: saved ? "Update reply" : "Send reply"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "confirm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: saved.coming === "yes" ? "We will look for you" : "Your blessing is kept" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: saved.coming === "yes" ? `${saved.name}, the door will be open for ${saved.guests === 1 ? "you" : `you and ${saved.guests - 1} ${saved.guests - 1 === 1 ? "guest" : "guests"}`}.` : `${saved.name}, the Patel family will carry your wishes across the threshold.` }),
							saved.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "meta",
								children: [
									"“",
									saved.note,
									"”"
								]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "meta",
								children: "Saved on this device only."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "actions",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn",
									type: "button",
									onClick: () => setEditing(true),
									children: "Edit reply"
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "foot",
				children: ["With love, ", INVITE.family]
			})
		]
	});
}
function InviteCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "card",
		"aria-label": "Griha Pravesh invitation from the Patel family",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "garland-top",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/garland.jpg",
					alt: ""
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "side side-left",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/side.jpg",
					alt: ""
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "side side-right",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/side.jpg",
					alt: ""
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "lantern lantern-left",
				src: "/art/lantern.jpg",
				alt: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "lantern lantern-right",
				src: "/art/lantern.jpg",
				alt: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "mandala mandala-left",
				src: "/art/mandala.jpg",
				alt: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "mandala mandala-right",
				src: "/art/mandala.jpg",
				alt: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: INVITE.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "title",
						children: INVITE.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "subtitle",
						children: INVITE.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flourish",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "verse",
						children: INVITE.verse
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "datelock",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "datelock-side",
								children: INVITE.weekday
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "datelock-mid",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "datelock-month",
									children: INVITE.month
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "datelock-day",
									children: INVITE.day
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "datelock-side",
								children: INVITE.year
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "muhurat",
						children: ["Muhurat : ", INVITE.muhurat]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "address",
						children: [
							INVITE.address1,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							INVITE.address2
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "family",
						children: INVITE.family
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scene-wrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/scene.jpg",
					alt: "The Patel family walking toward their marigold-draped new home"
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "stage",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "stage-bg",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InviteCard, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gathering, {})]
		})]
	});
}
//#endregion
export { Home as component };
