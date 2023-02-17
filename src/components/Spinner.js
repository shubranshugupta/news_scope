import React, { PureComponent } from 'react'

export class Spinner extends PureComponent {
    render() {
        return (
            <div className="text-center my-3 p-2">
                <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Spinner
