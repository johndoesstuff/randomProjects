package coolmod.packages;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import net.minecraft.client.Minecraft;
import net.minecraft.entity.Entity;
import net.minecraft.entity.player.EntityPlayer;
import net.minecraft.entity.projectile.EntityArrow;
import net.minecraft.item.Item;
import net.minecraft.item.ItemStack;
import net.minecraft.server.MinecraftServer;
import net.minecraft.util.ChatComponentText;
import net.minecraftforge.client.event.ClientChatReceivedEvent;
import net.minecraftforge.client.event.RenderGameOverlayEvent.Chat;
import net.minecraftforge.event.entity.player.EntityItemPickupEvent;
import net.minecraftforge.fml.common.eventhandler.SubscribeEvent;
import net.minecraftforge.fml.common.gameevent.TickEvent;

public class eventHandler {
    @SubscribeEvent
    public void pickupItem(EntityItemPickupEvent event) {
        System.out.println("Item picked up!");
    }
    
    Minecraft mc = Minecraft.getMinecraft();
    
    @SubscribeEvent
    public void chatEvent(ClientChatReceivedEvent event) {
        String msg = event.message.getUnformattedText();
        System.out.print(msg);
        if (msg.contains("start")) {
            try {
            	File myObj = new File("E:\\Downloads\\ilcapture\\capture.txt");
            	FileWriter fileWrite = new FileWriter("E:\\Downloads\\ilcapture\\capture.txt", true);
            	fileWrite.write("Begin Updates" + "\n");
            	System.out.println("Written to file");
            	fileWrite.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				System.out.println(e);
			}
        	mc.thePlayer.addChatMessage(new ChatComponentText("IL Capture Started"));
        	ScheduledThreadPoolExecutor executor = new ScheduledThreadPoolExecutor(1);
        	executor.scheduleAtFixedRate(new Runnable() {
        		@Override
        		public void run() {
        			update();  
        		}
        	}, 0, 50, TimeUnit.MILLISECONDS); //updates 20fps
        } else if (msg.contains("stop")) {
        	mc.thePlayer.addChatMessage(new ChatComponentText("IL Capture Stopped")); //doesn't actually do anything bc I'm lazy
        }
    }
    
    public void update() {
    	FileWriter fileWrite = null;
    	try {
        	fileWrite = new FileWriter("E:\\Downloads\\ilcapture\\capture.txt", true);
        	List<EntityPlayer> players = Minecraft.getMinecraft().theWorld.playerEntities;
        	for (int i = 0; i < players.size(); i++) {
        		if (players.get(i).posZ < -50 && players.get(i).posY > 100) { //x&y are IL specific
        			fileWrite.write("-P\n");
	        		fileWrite.write("Name: " + players.get(i).getDisplayName().getUnformattedText() + "\n");
	        		fileWrite.write("X: " + players.get(i).getPositionVector().xCoord + "\n");
	        		fileWrite.write("Y: " + players.get(i).getPositionVector().yCoord + "\n");
	        		fileWrite.write("Z: " + players.get(i).getPositionVector().zCoord + "\n");
	        		fileWrite.write("LX: " + players.get(i).getLookVec().xCoord + "\n");
	        		fileWrite.write("LY: " + players.get(i).getLookVec().yCoord + "\n");
	        		fileWrite.write("LZ: " + players.get(i).getLookVec().zCoord + "\n");
	        		for (int j = 0; j < 4; j++) {
	        			if (players.get(i).getCurrentArmor(j) != null) {
	        				fileWrite.write("Armr " + j + ": " + players.get(i).getCurrentArmor(j).getDisplayName() + "\n");
	        				fileWrite.write("Ench " + j + ": " + players.get(i).getCurrentArmor(j).getEnchantmentTagList() + "\n");
	            		}
	        		}
	        		fileWrite.write("Hlth: " + players.get(i).getHealth() + "\n");
	        		fileWrite.write("Sn: " + players.get(i).isSneaking() + "\n");
	        		fileWrite.write("Bl: " + players.get(i).isBlocking() + "\n");
	        		fileWrite.write("Sp: " + players.get(i).isSprinting() + "\n");
	        		ItemStack holding = players.get(i).getHeldItem();
	        		if (holding != null) {
	        			fileWrite.write("Hold: " + holding.getDisplayName() + "\n");
	        			fileWrite.write("Ench: " + holding.getEnchantmentTagList() + "\n");
	        			fileWrite.write("Am: " + holding.stackSize + "\n");
	        		}
	        		fileWrite.write("Fx: " + players.get(i).getActivePotionEffects() + "\n");
        		}
        	}
        	List<Entity> entitys = Minecraft.getMinecraft().theWorld.getLoadedEntityList();
        	for (int i = 0; i < entitys.size(); i++) {
        		if (entitys.get(i).getName().contentEquals("arrow") && entitys.get(i).posZ < -50 && entitys.get(i).posY > 100) { //x&y are IL specific
        			fileWrite.write("-A\n");
        			Entity arrow = entitys.get(i);
        			fileWrite.write("VX: " + arrow.motionX + "\n");
        			fileWrite.write("VY: " + arrow.motionY + "\n");
        			fileWrite.write("VZ: " + arrow.motionZ + "\n");
        			fileWrite.write("X: " + arrow.getPositionVector().xCoord + "\n");
        			fileWrite.write("Y: " + arrow.getPositionVector().yCoord + "\n");
        			fileWrite.write("Z: " + arrow.getPositionVector().zCoord + "\n");
        			EntityArrow arrowEnt = (EntityArrow) arrow;
        			Entity shootingEnt = arrowEnt.shootingEntity;
        			if (shootingEnt != null) {
        				if (shootingEnt.getDisplayName() != null) {
        					fileWrite.write("SB: " + arrowEnt.shootingEntity.getDisplayName().getUnformattedText() + "\n");
        				}
        			}
        		}
        	}
        	fileWrite.write("Update Complete" + "\n");
        	fileWrite.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }
}
