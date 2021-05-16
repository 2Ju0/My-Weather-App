function CityList(props) {
    // const cities = props.cities;
    const { cities } = props;
    return (
        <div>
            <h1>CityList</h1>
            <div>
                <ul className='city_list_cities' type='none'>
                {cities.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
                </ul>
            </div>
        </div>
    );
}
export default CityList;