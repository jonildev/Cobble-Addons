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
        §0[§bIgloo Addons§0] §f


        &6Seth is very awesome
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