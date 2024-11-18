const gnirts =  require("gnirts");

export function mangledEmail() {
    return gnirts.mangle(process.env.NEXT_PUBLIC_CONTACT_EMAIL);
}
