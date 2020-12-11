// Just a little note to not forget Pixellandia :D
//XD
Events.on(ClientLoadEvent, () => {
    const example = new Planet("Example", Planets.sun, 1, 0.5);
    example.generator = new SerpuloPlanetGenerator();
    example.mesh = new HexMesh(example, 2);
    example.bloom = true;
    example.radius = 1;
    example.accessible = true;
    example.hasAtmosphere = true;
    example.atmosphereColor = Color.valueOf("42e0f5");
    example.atmosphereRadIn = 0.02;
    example.atmosphereRadOut = 0.3;
    example.localizedName = "Example";
    
    const exampleSectorOne = new SectorPreset("exampleSectorOne", example, 1);
    exampleSectorOne.captureWave = 10;
    exampleSectorOne.localizedName = "Example Sector One";
    exampleSectorOne.difficulty = 3;
    exampleSectorOne.alwaysUnlocked = true;
    /*
    const shatteredGlacier = new SectorPreset("shatteredGlacier", example, 2);
    shatteredGlacier.captureWave = 35;
    shatteredGlacier.localizedName = "Shattered Glacier";
    shatteredGlacier.difficulty = 5;
    shatteredGlacier.alwaysUnlocked = true;
    
        const crossroads = new SectorPreset("crossroads", example, 26);
    crossroads.captureWave = 45;
    crossroads.localizedName = "Crossroads";
    crossroads.difficulty = 7;
    crossroads.alwaysUnlocked = true;
    */
});
