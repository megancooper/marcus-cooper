export default () => (
  <>
    <strong className="text-xl hidden lg:block">LinkedIn Recommendations</strong>

    <ul className="section-info mt-4 pr-2 w-full lg:max-w-xs hidden lg:block" tabIndex={-1}>
      <li id="ember429" className="pv-recommendation-entity ember-view flex flex-row lg:flex-col">
        <div className="pv-recommendation-entity__header" style={{width: '100%'}}>
          <a
            data-control-name="recommendation_details_profile"
            href="https://www.linkedin.com/in/mmonthei/"
            target="_blank"
            id="ember430"
            className="pv-recommendation-entity__member ember-view"
            rel="noreferrer"
          >
            <img width="56" src="https://media-exp1.licdn.com/dms/image/C4D03AQH3lRxt72RgSQ/profile-displayphoto-shrink_100_100/0/1566577382085?e=1625097600&amp;v=beta&amp;t=E9uoTEo-JkTI3AqjPfAHvoaC7e1Dgn-JbGYb_dVLn5k" loading="lazy" height="56" alt="Mike Monthei" id="ember431" className="EntityPhoto-circle-4 fl lazy-image ember-view" />
            <div className="pv-recommendation-entity__detail">
              <h3 className="t-16 t-black t-bold">Mike Monthei</h3>
              <p className="pv-recommendation-entity__headline t-14 t-black t-normal mb-4">
                Experienced Alliance Director Focused on Building
                Outstanding Partner Relationships and Driving Results
              </p>
              <p className="t-12 t-black--light t-normal">
                April 2, 2012, Mike was a client of Marcus’
              </p>
            </div>
          </a>
        </div>

        <div className="pv-recommendation-entity__highlights" style={{width: '100%', padding: 0}}>
          <blockquote className="pv-recommendation-entity__text relative">
            <div id="ember432" className="ember-view">
              {' '}
              <span className="lt-line-clamp__line">Marcus supported our team @ VMware while running a project</span>
              <span className="lt-line-clamp__line">to gather information and publish win stories for our System</span>
              <span className="lt-line-clamp__line">Integrator/Strategic Outsourcing business.  He took a project</span>
              <span className="lt-line-clamp__line">that was defined at a high level and did a great job defining the</span>
              <span className="lt-line-clamp__line lt-line-clamp__line--last">
                project plan, interviewing the sales teams to gather i
                <span className="lt-line-clamp__ellipsis">
                  <div className="lt-line-clamp__dummy-element">...</div>
                  <a data-test-line-clamp-show-more-button="true" target="_blank" href="https://www.linkedin.com/in/marcus-cooper-a1321113/" role="button" id="line-clamp-show-more-button" aria-expanded="false" className="lt-line-clamp__more" rel="noreferrer">See more</a>
                </span>
              </span>
            </div>
          </blockquote>
        </div>
      </li>
    </ul>
  </>
);
