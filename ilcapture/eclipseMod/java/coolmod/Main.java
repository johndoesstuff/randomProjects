package coolmod;
import java.util.List;
import coolmod.packages.eventHandler;

import org.lwjgl.input.Keyboard;

import net.minecraft.client.Minecraft;
import net.minecraft.client.entity.EntityPlayerSP;
import net.minecraft.client.settings.KeyBinding;
import net.minecraft.entity.Entity;
import net.minecraft.entity.player.EntityPlayer;
import net.minecraftforge.client.event.ClientChatReceivedEvent;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.event.ServerChatEvent;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.common.Mod.EventHandler;
import net.minecraftforge.fml.common.event.FMLInitializationEvent;
import net.minecraftforge.fml.common.event.FMLPostInitializationEvent;
import net.minecraftforge.fml.common.event.FMLPreInitializationEvent;
import net.minecraftforge.fml.common.eventhandler.SubscribeEvent;
import net.minecraftforge.fml.common.gameevent.InputEvent;
import net.minecraft.client.Minecraft;
import net.minecraft.server.MinecraftServer;
import net.minecraft.util.ChatComponentText;
import net.minecraft.util.ChatComponentTranslation;
import net.minecraft.util.EnumChatFormatting;
import net.minecraft.util.IChatComponent;
import net.minecraftforge.client.event.ClientChatReceivedEvent;
import net.minecraftforge.fml.common.eventhandler.SubscribeEvent;

@Mod(modid = "tutorialclient", version = "b1")
public class Main {

	@SubscribeEvent
    public void onKeyInput(InputEvent.KeyInputEvent event) {
		System.out.print(event);
    }
	
	@EventHandler
	public void preInit(FMLPreInitializationEvent event) {
		System.out.println("PRE INIT ---------------------------------------------------------------");
	}

	@EventHandler
	public void init(FMLInitializationEvent event) {
		System.out.println("INITIALIZED ---------------------------------------------------------------");
	}

	@EventHandler
	public void postInit(FMLPostInitializationEvent event) {
		System.out.println("POST INIT ---------------------------------------------------------------");
		MinecraftForge.EVENT_BUS.register(new eventHandler());
	}
}
