import { IApartment} from "@models/apartment.model";
import client from "../client";
import { APARTMENTS_URLS } from "@urls/apartments";
import { IApartmentListDetials } from "@models/apartment-list.model";

export async function getApartments(
): Promise<{ status: number; data: [IApartmentListDetials] }> {
		const result = await client
		.get({url: APARTMENTS_URLS.APARTMENTS})
		.then((res) => {
			return {
				status: res.status,
				data: res.data
			};
		})
		.catch((err) => {
			return { status: err.response.status, data: err.response.data };
		});
	return result;
}

export async function getApartment( id: string
	): Promise<{ status: number; data: IApartment }> {
		const result = await client
			.get({
				url: `${APARTMENTS_URLS.APARTMENTS}/${id}`
			})
			.then((res) => {
				return {
					status: res.status,
					data: res.data
				};
			})
			.catch((err) => {
				return { status: err.response.status, data: err.response.data };
			});
		return result;
	}