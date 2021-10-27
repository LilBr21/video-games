import useMoreInfo from './useMoreInfo';

const MoreInfo = () => {
    const { ...fetchedExtension } = useMoreInfo();

    console.log(fetchedExtension);
    return (
        <div>
            <h3>{fetchedExtension.name}</h3>

            <p>{fetchedExtension.description_raw}</p>
            <p>{fetchedExtension.released}</p>
            <p>{fetchedExtension.rating}</p>
        </div>
    )
}

export default MoreInfo;