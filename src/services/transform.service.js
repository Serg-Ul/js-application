export class TransformService {
    static fbObjectToArray(fbData) {
        return Object.keys(fbData).map((key => {
            return {
                id: key,
                ...fbData[key],
            }
        }));
    }
}