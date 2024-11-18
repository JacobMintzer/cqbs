const gnirts =  require("gnirts");

export function mangledEmail() {
    let x = btoa(String(process.env.NEXT_PUBLIC_CONTACT_EMAIL));
    let a : string = gnirts.mangle(atob(x));
    return a;
}
