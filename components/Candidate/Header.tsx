import React from 'react'
type props={
    totalCandidate:number
}
export default function Header({totalCandidate}:props) {
  return (
    <div>
        <div>
            <h1>Candidates</h1>
            <p>Total Candidate {totalCandidate}</p>
        </div>
    </div>
  )
}
