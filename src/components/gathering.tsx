import { useEffect, useState, type FormEvent } from "react";
import { CalendarPlus, MapPin } from "lucide-react";
import {
  calendarUrl,
  downloadIcs,
  INVITE,
  loadReply,
  mapsUrl,
  saveReply,
  type Coming,
  type Reply,
} from "@/lib/invite";

export function Gathering() {
  const [coming, setComing] = useState<Coming>("yes");
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState<Reply | null>(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const existing = loadReply();
    if (!existing) return;
    setSaved(existing);
    setName(existing.name);
    setGuests(existing.guests);
    setComing(existing.coming);
    setNote(existing.note);
  }, []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Please share your name.");
      return;
    }
    const reply: Reply = {
      name: trimmed,
      guests: coming === "yes" ? guests : 0,
      coming,
      note: note.trim(),
      at: new Date().toISOString(),
    };
    saveReply(reply);
    setSaved(reply);
    setEditing(false);
    setError("");
  }

  const showForm = !saved || editing;

  return (
    <section className="gathering" aria-labelledby="gathering-title">
      <p className="eyebrow">The ceremony</p>
      <h2 className="script-h" id="gathering-title">
        At the threshold
      </h2>

      <div className="facts">
        <div className="fact">
          <b>
            {INVITE.weekday}, {INVITE.month} {INVITE.day}
          </b>
          <span>{INVITE.year}</span>
        </div>
        <div className="fact">
          <b>{INVITE.muhurat}</b>
          <span>Muhurat</span>
        </div>
        <div className="fact">
          <b>{INVITE.address1}</b>
          <span>{INVITE.address2}</span>
        </div>
      </div>

      <div className="actions">
        <a className="btn" href={mapsUrl()} target="_blank" rel="noreferrer">
          <MapPin aria-hidden="true" />
          Directions
        </a>
        <a className="btn" href={calendarUrl()} target="_blank" rel="noreferrer">
          <CalendarPlus aria-hidden="true" />
          Google Calendar
        </a>
        <button className="btn" type="button" onClick={downloadIcs}>
          <CalendarPlus aria-hidden="true" />
          Save .ics
        </button>
      </div>

      <div className="rsvp">
        <img className="kalash" src="/art/kalash.jpg" alt="" />
        <p className="eyebrow">A note for the family</p>
        <h2 className="script-h">Your blessing</h2>

        {showForm ? (
          <form onSubmit={onSubmit}>
            <p className="lead">
              Kindly tell {INVITE.family} whether you will stand with them as they cross the
              threshold.
            </p>
            <div className="choice" role="group" aria-label="Will you attend">
              <button
                type="button"
                aria-pressed={coming === "yes"}
                onClick={() => setComing("yes")}
              >
                We will be there
              </button>
              <button
                type="button"
                aria-pressed={coming === "afar"}
                onClick={() => setComing("afar")}
              >
                Blessings from afar
              </button>
            </div>

            <label className="field">
              <span>Your name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                maxLength={80}
              />
            </label>

            {coming === "yes" ? (
              <div className="stepper">
                <span className="stepper-label">Guests including you</span>
                <div className="stepper-controls">
                  <button
                    type="button"
                    aria-label="Fewer guests"
                    onClick={() => setGuests((n) => Math.max(1, n - 1))}
                  >
                    −
                  </button>
                  <strong>{guests}</strong>
                  <button
                    type="button"
                    aria-label="More guests"
                    onClick={() => setGuests((n) => Math.min(12, n + 1))}
                  >
                    +
                  </button>
                </div>
              </div>
            ) : null}

            <label className="field">
              <span>A blessing, if you wish</span>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength={400}
              />
            </label>

            {error ? <p className="form-error">{error}</p> : null}

            <button className="btn btn-solid" type="submit">
              {saved ? "Update reply" : "Send reply"}
            </button>
          </form>
        ) : (
          <div className="confirm">
            <h3>{saved.coming === "yes" ? "We will look for you" : "Your blessing is kept"}</h3>
            <p>
              {saved.coming === "yes"
                ? `${saved.name}, the door will be open for ${saved.guests === 1 ? "you" : `you and ${saved.guests - 1} ${saved.guests - 1 === 1 ? "guest" : "guests"}`}.`
                : `${saved.name}, the Patel family will carry your wishes across the threshold.`}
            </p>
            {saved.note ? <p className="meta">“{saved.note}”</p> : null}
            <p className="meta">Saved on this device only.</p>
            <div className="actions">
              <button className="btn" type="button" onClick={() => setEditing(true)}>
                Edit reply
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="foot">With love, {INVITE.family}</p>
    </section>
  );
}
