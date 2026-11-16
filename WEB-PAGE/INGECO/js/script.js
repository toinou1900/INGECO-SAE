function ouvrirLienNouvelOnglet(url) {
	window.open(url, "_blank", "noopener,noreferrer");
}

function toggles(idPremier, ...idsSecondaires) {
	const premier = document.getElementById(idPremier);

	if (!premier) return;

	const premierEstVisible = !premier.hidden;
	premier.hidden = !premierEstVisible;

	idsSecondaires.forEach((id) => {
		if (!id) return;

		const element = document.getElementById(id);
		if (element) element.hidden = true;
	});
}
