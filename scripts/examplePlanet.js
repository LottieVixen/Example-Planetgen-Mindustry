// run on client load
Events.on(ClientLoadEvent, () => {
    // create the planet, named "example", orbits around sun (variable name is camelCase, planet name is kebab-case)
    const example = new Planet("example", Planets.sun, 1, 0.5);
    // set the sector generator to serpulo generator (generates maps)
    example.generator = new SerpuloPlanetGenerator();
    // make a mesh for the planet
    example.mesh = new HexMesh(example, 2);
    // enable bloom
    example.bloom = true;
    // set planet radius
    example.radius = 1;
    // make the planet accessible
    example.accessible = true;
    // give it an atmosphere
    example.hasAtmosphere = true;
    // set the atmosphere color, as a hex value
    example.atmosphereColor = Color.valueOf("42e0f5");
    // set inside and outside atmosphere radius
    example.atmosphereRadIn = 0.02;
    example.atmosphereRadOut = 0.3;
    // give the planet a visible name (with all the capital letters and stuff)
    example.localizedName = "Example";
    
    // load the map, sector name is "example-sector-one"(same with the msav file name), on the planet "example"(camelCase), sector number is 1 (variable name is camelCase, sector name is kebab-case)
    const exampleSectorOne = new SectorPreset("example-sector-one", example, 1);
    // set the capture wave
    exampleSectorOne.captureWave = 10;
    // set the difficulty for the sector, 1 to 10
    exampleSectorOne.difficulty = 3;
    // whether if the sector is always unlocked
    exampleSectorOne.alwaysUnlocked = true;
    // the visible name for this sector
    exampleSectorOne.localizedName = "Example Sector One";
});
