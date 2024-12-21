import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            {/* Mission Section */}
            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to provide the best food delivery service that
                    connects food enthusiasts with local restaurants, ensuring fast and
                    reliable delivery with a focus on quality and customer satisfaction.
                </p>
            </section>

            {/* History Section */}
            <section className="history-section">
                <h2>Our History</h2>
                <p>
                    We started our journey in 2024 with the goal of revolutionizing the
                    food delivery industry. Over time, we have expanded our offerings and
                    built strong partnerships with local restaurants to bring the best
                    food to your doorstep.
                </p>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <h2>Meet Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <h3>Nishan</h3>
                        <p>Role: CEO</p>
                    </div>
                    <div className="team-member">
                        <h3>Amy</h3>
                        <p>Role: CTO</p>
                    </div>
                    <div className="team-member">
                        <h3>Ibrahim Munna</h3>
                        <p>Role: COO</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
