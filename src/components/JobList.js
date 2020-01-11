import React, { Component } from 'react';

import Card from './Card';



class JobList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            query: '',
            location: ''
        };

        this.search = this.search.bind(this);
        this.handleKeywordInputChange = this.handleKeywordInputChange.bind(this);
        this.handleLocationInputChange = this.handleLocationInputChange.bind(this);
    }

    componentDidMount() {
        this.fetchJobs();

    }

    render() {
        return (<div className="my-3 p-3 bg-white rounded shadow-sm">

            <h5 className="border-bottom border-gray pb-2 mb-0">İş İlanları</h5>

            <form className="d-flex px-5 mt-5 my-2">
                <input className="form-control mr-sm-2" type="search" placeholder="Örnek: Yazılım Geliştirici" onChange={this.handleKeywordInputChange}></input>
                <input className="form-control mr-sm-2" type="search" placeholder="Örnek: İstanbul" onChange={this.handleLocationInputChange}></input>

                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={this.search}>Ara</button>
            </form>

            <ul className="mt-5 px-5" >
                {this.state.jobs.map(job => {
                    const title = `${job.positionName} @${job.companyName}`;
                    const text = `${job.townName}, ${job.cityName} konumundaki ${job.companyName} ofisinde ${job.positionName} rolü başvurularını bekliyor!`;
                    const link = `/jobdetails/${job.jobId}`;
                    return <Card
                        key={job.jobId}
                        title={title}
                        image={job.imageUrl}
                        badgeText={job.durationDayText}
                        text={text}
                        link={link}></Card>
                })}
            </ul>
        </div >);
    }

    fetchJobs() {
        fetch('https://5e19bd7fcc623b0014678a28.mockapi.io/api/v1/jobs')
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse && jsonResponse.statusCode && jsonResponse.statusCode === 200) {
                    if (jsonResponse && jsonResponse.result) {
                        let jobItems = jsonResponse.result.items;
                        // Kullandığım mock backend sorting kapasitesine sahip olmadığı için cevap geldikten sonra durationDay field'ına göre sort ediyorum -- MT
                        jobItems = jobItems.sort((j1, j2) => j1.durationDay * j2.durationDay);

                        this.setState({ jobs: jobItems });
                    }
                } else {
                    alert(`Http Response: ${jsonResponse.statusCode}`);
                }
            });
    }

    // Kullandığım mock backend search kapasitesine sahip olmadığı için state içindeki job listesinde arama yapıyor ya da arama kriteri yoksa tüm listeyi refreh ediyorum
    search(e) {
        if (e) e.preventDefault();
        let results = this.state.jobs;

        if ((this.state.query && this.state.query.length > 0) || (this.state.location && this.state.location.length > 0)) {

            if (this.state.query && this.state.query.length > 0) {
                results = results.filter(job => {
                    const jobString = JSON.stringify(job).toLowerCase();
                    return jobString.includes(this.state.query);
                });
            }

            if (this.state.location && this.state.location.length > 0) {
                results = results.filter(job => job.cityName.toLowerCase().includes(this.state.location) || job.townName.toLowerCase().includes(this.state.location));


            }


            this.setState({ jobs: results });
        } else {
            this.fetchJobs();
        }
    }

    handleKeywordInputChange(e) {
        e.preventDefault();
        if (e && e.target && e.target.value) {
            this.setState({ location: e.target.value.trim().toLowerCase() })
        } else {
            this.fetchJobs();
        }
    }

    handleLocationInputChange(e) {
        e.preventDefault();
        if (e && e.target && e.target.value) {
            this.setState({ location: e.target.value.trim().toLowerCase() })
        } else {
            this.fetchJobs();
        }

    }
}

export default JobList;