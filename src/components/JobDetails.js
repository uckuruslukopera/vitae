import React, { Component } from 'react';
import { Link } from "react-router-dom";

const imgStyle = {
    height: '120px',
    width: '120px'

}


class JobDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            job: null
        };


    }

    componentDidMount() {

        const jobId = this.props.match.params.jobId;

        fetch(`https://5e19bd7fcc623b0014678a28.mockapi.io/api/v1/jobs/${jobId}`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse && jsonResponse.statusCode && jsonResponse.statusCode === 200) {
                    this.setState({ job: jsonResponse.result });
                } else {
                    alert(`Http Response: ${jsonResponse.statusCode}`);
                }
            });


        this.apply = this.apply.bind(this);

    }

    render() {
        return (<div className="my-3 p-3 bg-white rounded shadow-sm">

            <div className="d-flex flex-row border-bottom border-gray">
                <Link to="/" >	&lt; Geri</Link>

                <h5 className=" pb-2 mb-0 ml-5">{(this.state.job && this.state.job.positionName) || ''} - İş Detayı</h5>
            </div>



            <div className="d-flex flex-row">




                <img className="img-fluid mr-2 mt-2" src={(this.state.job && this.state.job.imageUrl) || ''} alt={(this.state.job && this.state.job.positionName) || ''} style={imgStyle}></img>

                <div className="d-flex flex-column">
                    <span className="mt-2">{(this.state.job && this.state.job.companyName) || ''} - {(this.state.job && this.state.job.townName) || ''}, {(this.state.job && this.state.job.countryCode) || ''}</span>
                    <small className="text-muted">{(this.state.job && this.state.job.durationDay) || 'Bir kaç'} gün önce yayımlandı, {(this.state.job && this.state.job.durationDayText) || ''}</small>
                </div>
            </div>

            <div className="mt-5">
                <dl className="row">
                    <dt className="col-sm-3">Rol Adı</dt>
                    <dd className="col-sm-9">{(this.state.job && this.state.job.positionName) || ''}</dd>

                    <dt className="col-sm-3">Şirket</dt>
                    <dd className="col-sm-9">
                        {(this.state.job && this.state.job.companyName) || ''}
                    </dd>

                    <dt className="col-sm-3">Adres</dt>
                    <dd className="col-sm-9">{(this.state.job && this.state.job.address) || ''}</dd>

                    <dt className="col-sm-3 text-truncate">Detaylar</dt>
                    <dd className="col-sm-9">{(this.state.job && this.state.job.description) || ''}</dd>

                </dl>
            </div>

            <div className="mt-5 d-flex justify-content-end">
                <button type="button" className="btn btn-primary btn-lg" onClick={this.apply}>Bu Butona Basmayınız</button>
            </div>

        </div >);
    }

    apply(e) {
        e.preventDefault();
        console.log(':(');
    }
}

export default JobDetails;