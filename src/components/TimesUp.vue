<script>
export default {};
</script>

<template>
    <div class="timesup-container">
        <div class="timesup-logo-container">
            <div class="timesup-logo-content">
                <svg
                    width="92"
                    height="130"
                    viewBox="0 0 92 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M46.206 25.339L17.5306 7.91702V25.339L33.4614 36.4257V53.0558V69.6858L0.00683594 51.076V71.6656L46.206 129.871V25.339Z"
                        fill="#FF645A"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M78.0674 42.761L92.0068 51.076L61.3402 69.6858V53.0558L78.0674 42.761ZM33.4614 53.0558L15.141 42.761L0.00683594 51.076L33.4614 69.6858V53.0558Z"
                        fill="#21BEC5"
                    />
                    <path
                        d="M33.4614 0.370605L17.5306 7.91702L46.206 25.339L78.0674 7.91702L67.5068 0.370605L48.0068 10.3706L33.4614 0.370605Z"
                        fill="#21BEC5"
                    />
                    <path
                        d="M78.0674 7.91702L46.206 25.339V129.871L92.0068 71.6656V51.076L61.3402 69.6858V53.0558V36.4257L78.0674 25.339V7.91702Z"
                        fill="#1D4244"
                    />
                </svg>
            </div>
        </div>
        <div class="custom-container">
            <div class="timesup-content">
                <div class="timesup-text">
                    <span>TIME'S UP:</span>
                    <h2>Elevate Your Brand to the Next Level.</h2>
                    <p>
                        At Elevate Strategy Studio, we understand that your
                        brand is more than just a logo or a website—it's your
                        story, your vision, and your passion. That's why we go
                        beyond the surface to uncover the essence of your brand
                        and infuse it into every pixel, every line of code, and
                        every interaction. With our tailored approach and
                        unwavering commitment to excellence, we don't just
                        create digital experiences; we craft unforgettable
                        journeys that leave a lasting impression on your
                        audience.
                    </p>
                </div>
                <img src="@/assets/elevate_logo.svg" alt="" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.timesup-container {
    margin-top: -124px;
    display: flex;
/*     background-image: url("@/assets/timesupbg.webp"); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .timesup-logo-container {
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }

    .timesup-content {
        border-radius: 0px 0px 150px 150px;
        padding: 120px 5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 4px 121.5999984741211px 0px #00000073;
        background: linear-gradient(
            270deg,
            rgba(0, 0, 0, 0.1625) -10.73%,
            rgba(0, 0, 0, 0.1) 103.75%
        );

        .timesup-text {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 50%;
            color: aliceblue;

            span {
                font-family: "FuturaBook";
                font-size: 32px;
                color: #ffffff;
            }

            h2 {
                font-family: "FuturaBold";
                font-size: 48px;
                font-weight: 500;
                line-height: 58px;
                letter-spacing: 0em;
                text-align: left;
                color: #21bec5;
            }

            p {
                padding-top: 8px;
                font-family: "Montserrat";
                font-size: 20px;
                font-weight: 400;
                line-height: 32px;
                letter-spacing: 0em;
                text-align: left;
            }
        }
    }
}
</style>
