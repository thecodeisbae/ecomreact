import React from 'react'

const Newsletter = () => {
  return (
    <div id="newslater-popup" className="mfp-hide white-popup-block open align-center">
        <div className="nl-popup-main">
            <div className="nl-popup-inner">
                <div className="newsletter-inner">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <div className="mtb-30 text-center">
                                <h2 className="main_title">Subscribe Emails</h2>
                                <span className="sub-title mb-30">Sign up & get 10% off</span>
                                <form>
                                    <input type="email" placeholder="Email Here..." required />
                                    <button className="btn-color big-width btn" title="Subscribe">Subscribe</button>
                                </form>
                                <div className="check-box mt-30">
                                    <span>
                                        <input type="checkbox" className="checkbox" id="different-address" name="Ship to a different address?" />
                                        <label htmlFor="different-address">Don`t show this popup again</label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
