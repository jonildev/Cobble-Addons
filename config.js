import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
    @SliderProperty,
    @NumberProperty,
} from '../Vigilance/index';

@Vigilant("Cobble Config", "Cobble Addons", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Warper"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Settings {
    constructor() {
        this.initialize(this)
        this.setCategoryDescription("General",
            `
        &b&l&nCobble Addons
        &bJonil is very cool and cool
        And maybe cobble
        RIP to seth
        `
        )

    }
    @SwitchProperty({
        name: "Player Hider",
        description: "Hides and remvoes hitbox of Player",
        category: "General",
        subcategory: "QOL"
    })
    playerhider = false

    @SwitchProperty({
        name: "Mineshaft Hider",
        description: "Hides and remvoes hitbox of Mineshafts",
        category: "General",
        subcategory: "QOL"
    })
    mineshaft = false

    @SwitchProperty({
        name: "Lobby Markingg",
        description: "Marks your previous lobbys. /clearmarks to reset",
        category: "General",
        subcategory: "QOL"
    })
    lobbyMarking = false

    @SwitchProperty({
        name: "Anti Limbo",
        description: "It goes into skyblock and starts tunnel mining",
        category: "Warper",
    })
    antilimbo = false

    @SwitchProperty({
        name: "Auto Warp Out",
        description: "Warps out if a blacklisted player joines the lobby",
        category: "Warper",
    })
    warpOut = false

    @SwitchProperty({
        name: "Ability Warp",
        description: "Warps out after ur ability expired.",
        category: "Warper",
    })
    abilitywarp = false

    @SliderProperty({
        name: "Warp Out Delay",
        description: "Minimum Delay before warping out. (+- 1000ms)",
        category: "Warper",
        subcategory: "Misc",
        min: 0,
        max: 10000
    })
    timeoutDuration = 3000;

    @SliderProperty({
        name: "Warp Retry Delay",
        description: "Sets delay between the Warp Retries before it tries to warp out.",
        category: "Warper",
        subcategory: "Misc",
        min: 0,
        max: 10000
    })
    retrydelay = 3000;

    @SliderProperty({
        name: "Warp Retries",
        description: "Sets how many times it tries to warp out. After starting failsafes.",
        category: "Warper",
        subcategory: "Misc",
        min: 0,
        max: 100
    })
    maxtries = 10;

}
export default new Settings()

export const PREFIX = `&f[&bCobble Addons&f]`