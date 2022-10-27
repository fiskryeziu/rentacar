import React from 'react'
import { FaBookmark, FaCar, FaUserAlt } from 'react-icons/fa'

const Dashboard = () => {
  return (
    <div>
      <div className="stats stats-vertical md:stats-horizontal shadow mx-auto">
        <div className="stat">
          <div className="stat-figure text-primary">
            <FaCar className="text-4xl" />
          </div>
          <div className="stat-title">Total Cars</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBookmark className="text-4xl text-accent" />
          </div>
          <div className="stat-title">Reservations</div>
          <div className="stat-value text-accent">5</div>
          <div className="stat-desc">4 confirmed & 10 unconfirmed</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserAlt className="text-4xl" />
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">10</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
