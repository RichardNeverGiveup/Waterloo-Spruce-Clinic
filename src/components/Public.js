import { Link } from "react-router-dom";

import React from "react";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h1>
              Welcome to <span className="nowrap">Waterloo Spruce Clinic!</span>
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ marginRight: "2rem" }}>
              <Link to="/appointment">Appointment</Link>
            </div>
            <div style={{ marginRight: "2rem" }}>
              <Link to="/loginE">Employee Login</Link>
            </div>
            <div style={{ marginRight: "2rem" }}>
              <Link to="/loginP">Patient Login</Link>
            </div>
          </div>
        </div>
      </header>
      <main className="public__main">
        <p>
          Located in Peaceful Downtown Waterloo, Waterloo Spruce Clinic provides
          professional medical service to all patients.
        </p>
        <address className="public__addr">
          Spruce Clinic
          <br />
          Location: 321 Spruce street Waterloo, ON
          <br />
          Mail: N2L 3M6
          <br />
          <a href="tel:+15555555555">Tel: (555) 555-5555</a>
        </address>
        <br />
        <p>Clinic is open from 9:00 am to 4:00 pm during weekdays.</p>
        <p>
          The clinic may stop accepting patients 1 hour before closing time,
          please arrive at the clinic accordingly.
          <br />
          Thank you.
        </p>
      </main>
      <footer style={{ textAlign: "center" }}>
        ©2022 by Waterloo Spruce Clinic
      </footer>
    </section>
  );
  return content;
};

export default Public;
