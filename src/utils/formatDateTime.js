export function formatDateTime(date= new Date()){
    return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "long",
    }).format(date);
}