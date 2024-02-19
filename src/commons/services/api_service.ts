export default class ApiService {
    static fetch<P extends {}, R>(
        endpoint: string,
        args: {
            parameters?: P,
            onSuccess: (response: R) => void,
            onFailure: (error: any) => void,
        }
    ) {
        const body = JSON.stringify(args.parameters);

        try {
            fetch(endpoint, {
                method: "get",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: body,
            }).then(
                response => {
                    return response.json();
                },
                error => {
                    args.onFailure(error);
                }
            ).then(
                response => {
                    args.onSuccess(response);
                },
                error => {
                    args.onFailure(error);
                }
            );
        } catch (error) {
            args.onFailure(error);
        }
    }
}