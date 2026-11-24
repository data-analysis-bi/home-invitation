import { INVITE } from "@/lib/invite";

export function InviteCard() {
  return (
    <article className="card" aria-label="Griha Pravesh invitation from the Patel family">
      <div className="garland-top">
        <img src="/art/garland.jpg" alt="" />
      </div>
      <div className="side side-left" aria-hidden="true">
        <img src="/art/side.jpg" alt="" />
      </div>
      <div className="side side-right" aria-hidden="true">
        <img src="/art/side.jpg" alt="" />
      </div>
      <img className="lantern lantern-left" src="/art/lantern.jpg" alt="" />
      <img className="lantern lantern-right" src="/art/lantern.jpg" alt="" />
      <img className="mandala mandala-left" src="/art/mandala.jpg" alt="" />
      <img className="mandala mandala-right" src="/art/mandala.jpg" alt="" />

      <div className="copy">
        <p className="kicker">{INVITE.kicker}</p>
        <h1 className="title">{INVITE.title}</h1>
        <p className="subtitle">{INVITE.subtitle}</p>
        <div className="flourish" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>
        <p className="verse">{INVITE.verse}</p>

        <div className="datelock">
          <div className="datelock-side">{INVITE.weekday}</div>
          <div className="datelock-mid">
            <div className="datelock-month">{INVITE.month}</div>
            <div className="datelock-day">{INVITE.day}</div>
          </div>
          <div className="datelock-side">{INVITE.year}</div>
        </div>

        <p className="muhurat">Muhurat : {INVITE.muhurat}</p>
        <p className="address">
          {INVITE.address1}
          <br />
          {INVITE.address2}
        </p>
        <p className="family">{INVITE.family}</p>
      </div>

      <div className="scene-wrap">
        <img
          src="/art/scene.jpg"
          alt="The Patel family walking toward their marigold-draped new home"
        />
      </div>
    </article>
  );
}
