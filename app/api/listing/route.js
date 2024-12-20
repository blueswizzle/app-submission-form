import { NextResponse } from "next/server";
import db from '../../db';

export async function POST(request) {
    try {
        const listing = await request.json();


        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            businessName,
            muslimOwned,
            muslimOperated,
            servingMuslimCommunity,
            additionalInfo,
        } = listing;


        if (
            !firstName ||
            !lastName ||
            !email ||
            !phoneNumber ||
            !businessName ||
            muslimOwned === undefined ||
            muslimOperated === undefined ||
            servingMuslimCommunity === undefined

        ) {
            console.log('Missing required information!')
            return NextResponse.json(
                { error: "All fields are required. Please fill in missing values." },
                { status: 400 }
            );
        }


        console.log("Valid data:", listing);


        const { data, error } = await db
            .from('listing')
            .insert([
                { first_name: firstName, last_name: lastName, email: email, phone_number: phoneNumber, business_name: businessName, muslim_owned: muslimOwned, muslim_operated: muslimOperated, serving_muslim_community: servingMuslimCommunity, additional_info: additionalInfo },
            ])
            .select()

        console.log(data)
        console.log(error)

        return NextResponse.json({ message: "Listing submitted successfully!" });
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
