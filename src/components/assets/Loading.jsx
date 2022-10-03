import React from 'react'

function Loading() {
  return (
    <div className="loading-screen">
        <div className="wrapper">
            <div className="loader">
                <div className="dot"></div>
            </div>
            <div className="loader">
                <div className="dot"></div>
            </div>
            <div className="loader">
                <div className="dot"></div>
            </div>
            <div className="loader">
                <div className="dot"></div>
            </div>
            <div className="loader">
                <div className="dot"></div>
            </div>
        </div>
        <div className="text">Please Wait</div>
    </div>
  )
}

export default Loading