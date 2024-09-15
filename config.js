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

@Vigilant("Cobble-Addons-0.0.4", "Cobble Addons", {
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
        description: "Hides and remvoes hitbox of Player",
        category: "General",
        subcategory: "QOL"
    })
    mineshaft = false

    @SwitchProperty({
        name: "Anti Limbo",
        description: "It goes into skyblock and starts tunnel mining",
        category: "General",
        subcategory: "QOL",
    })
    antilimbo = false

    @SwitchProperty({
        name: "Auto Warp Out",
        description: "Warps out if a blacklisted player joines the lobby",
        category: "Warper",
    })
    warpOut = false

    @SwitchProperty({
        name: "Warp msb",
        description: "Warps out after ur msb expired.",
        category: "Warper",
    })
    warpmsb = false

    @SliderProperty({
        name: "Warp Out Delay",
        description: "Max Delay before warping out.",
        category: "Warper",
        subcategory: "Cooldown",
        min: 0,
        max: 10000
    })
    timeoutDuration = 500;
}
export default new Settings()

export const PREFIX = "&f[&bAuto Warp-Out&f]"