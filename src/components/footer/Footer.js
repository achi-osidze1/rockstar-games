import React from 'react';

function Footer() {
    return(
        <footer className='footer'>
            <div className='footer-top'>
                <nav>
                    <div className='links'>
                        <a className='link' href='#'>Contact</a>
                        <a className='link' href='#'>Careers</a>
                        <a className='link' href='#'>Subscribe</a>
                    </div>
                </nav>
                <div className='option'>
                    <select className='select'>
                        <option>English</option>
                        <option>Deutsch</option>
                        <option>Francais</option>
                        <option>Italiano</option>
                        <option>Espanol (Espana)</option>
                        <option>Espanol (Mexico)</option>
                        <option>Portugues</option>
                        <option>Polski</option>
                    </select>
                </div>
            </div>
            <div className='footer-middle'>
                <div className='second-links'>
                    <a className='second-link' href='#'>Corporate</a>
                    <a className='second-link' href='#'>Privacy</a>
                    <a className='second-link' href='#'>Cookie Settings</a>
                    <a className='second-link' href='#'>Cookie Policy</a>
                    <a className='second-link' href='#'>Legal</a>
                    <a className='second-link' href='#'>Don't Sell My Personal Information</a>
                </div>
                <div className='icons'>
                    <img className='icon' src='data:image/svg+xml;charset=utf-8,%3Csvg width=%2724%27 height=%2724%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M4.265 3 3 6.236v13.223h4.502V21l2.531.85 2.392-2.391h3.658l4.923-4.924V3H4.265Zm15.052 10.691-2.813 2.814h-4.502l-2.391 2.391v-2.391H5.813V4.688h13.504v9.003Zm-2.812-5.767v4.923h-1.688V7.924h1.688Zm-4.502 0v4.923h-1.688V7.924h1.688Z%27 fill=%27%23fff%27/%3E%3C/svg%3E' alt=''/>
                    <img className='icon' src='data:image/svg+xml;charset=utf-8,%3Csvg width=%2724%27 height=%2724%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M11.999 7.377a4.624 4.624 0 1 0 0 9.248 4.624 4.624 0 0 0 0-9.248Zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008Zm4.806-6.719a1.078 1.078 0 1 0 0-2.156 1.078 1.078 0 0 0 0 2.156Z%27 fill=%27%23fff%27/%3E%3Cpath d=%27M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.607 6.607 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.583 6.583 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.616 6.616 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.583 6.583 0 0 0-.421-2.217Zm-1.218 9.532a5.046 5.046 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.99 4.99 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.961 4.961 0 0 1-1.67-.311 2.985 2.985 0 0 1-1.718-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.95-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.99 2.99 0 0 1 1.712 1.712c.197.535.302 1.1.311 1.669.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011v-.001Z%27 fill=%27%23fff%27/%3E%3C/svg%3E' alt=''/>
                    <img className='icon' src='data:image/svg+xml;charset=utf-8,%3Csvg width=%2724%27 height=%2724%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.026 4.026 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.021 4.021 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.024 4.024 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973c-.3.93-.93 1.72-1.771 2.22a8.073 8.073 0 0 0 2.319-.624 8.646 8.646 0 0 1-2.019 2.083Z%27 fill=%27%23fff%27/%3E%3C/svg%3E' alt=''/>
                    <img className='icon' src='data:image/svg+xml;charset=utf-8,%3Csvg width=%2724%27 height=%2724%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766c-1.566-.43-7.83-.437-7.83-.437s-6.265-.007-7.832.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831ZM9.996 15.005l.005-6 5.207 3.005-5.212 2.995Z%27 fill=%27%23fff%27/%3E%3C/svg%3E' alt=''/>
                    <img className='icon' src='data:image/svg+xml;charset=utf-8,%3Csvg width=%2724%27 height=%2724%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.82-.088-1.643-.13-2.467-.127-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312Z%27 fill=%27%23fff%27/%3E%3C/svg%3E' alt=''/>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-start-text'>
                    <h6>Rockstar Games</h6>
                </div>
                <div className='footer-center-text'>
                    <h6 className='h6'>New York</h6>
                    <h6 className='h6'>London</h6>
                    <h6 className='h6'>Paris</h6>
                    <h6 className='h6'>Bogota</h6>
                </div>
                <div className='footer-end-text'>
                    <h6>MCMXCVIII</h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer